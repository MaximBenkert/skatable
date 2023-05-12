package com.github.maximbenkert.backend.spot;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class SpotIntegrationTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;

    String testSpotJsonWithoutId = """
            {
               "coordinates": {
                  "latitude": 37.7749,
                  "longitude": 12.4194
               },
               "name": "test"
            }
            """;

    Coordinates newCoordinates = new Coordinates(0, 0);


    @Test
    void getAllSpots_shouldReturnEmptyList_whenRepoIsEmpty() throws Exception {
        mockMvc.perform(get("/api/spots"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """
                ));
    }

    @Test
    void addSpot_shouldReturnAddedSpot() throws Exception {
        mockMvc.perform(post("/api/spots")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(testSpotJsonWithoutId))
                .andExpect(status().isOk())
                .andExpect(content().json(testSpotJsonWithoutId))
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

    @Test
    void getSpotByIdShouldReturnRequestedSpot() throws Exception {
        String requested = mockMvc.perform(post("/api/spots")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(testSpotJsonWithoutId))
                .andReturn()
                .getResponse()
                .getContentAsString();
        Spot actualSpot = objectMapper.readValue(requested, Spot.class);
        String id = actualSpot.id();


        mockMvc.perform(get("/api/spots/" + id))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                                 {
                                 "id": "<ID>",
                                 "coordinates": {
                           "latitude": 37.7749,
                           "longitude": 12.4194
                        },
                        "name": "test"
                                 
                                 }
                                 """.replaceFirst("<ID>", id)));
    }

    @Test
    void expectSuccessfulDelete() throws Exception {
        String saveResult = mockMvc.perform(post("/api/spots")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(testSpotJsonWithoutId))
                .andReturn()
                .getResponse()
                .getContentAsString();
        Spot savedSpot = objectMapper.readValue(saveResult, Spot.class);
        String id = savedSpot.id();

        mockMvc.perform(delete("/api/spots/" + id))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/spots"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));

    }

    @Test
    void expectSuccessfulUpdate() throws Exception {
        String putResult = mockMvc.perform(post("/api/spots")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(testSpotJsonWithoutId))
                .andExpect(status().isOk())
                .andExpect(content().json(testSpotJsonWithoutId))
                .andReturn()
                .getResponse()
                .getContentAsString();


        Spot addedSpot = objectMapper.readValue(putResult, Spot.class);

        Spot toUpdate = new Spot(addedSpot.id(), (newCoordinates), "Rail");
        String spotToUpdateJson = objectMapper.writeValueAsString(toUpdate);

        mockMvc.perform(put("/api/spots/" + toUpdate.id())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(spotToUpdateJson))
                .andExpect(status().isOk())
                .andExpect(content().string(spotToUpdateJson)
                );
    }

    @Test
    void updateSpot_shouldFail_whenBodyIdAndUrlIdAreNotEqual() throws Exception {
        String bodyId = "1";
        String urlId = "123";
        Spot spotToUpdate = new Spot(bodyId, newCoordinates, "something");
        String spotToUpdateJson = objectMapper.writeValueAsString(spotToUpdate);
        String expectedBody = "{\"message\": \"The id in the url does not match the request body's id\"}";


        mockMvc.perform(put("/api/spots/" + urlId)
                .contentType(MediaType.APPLICATION_JSON)
                .content(spotToUpdateJson))
                .andExpect(status().isBadRequest())
                .andExpect(content().json(expectedBody))
                .andExpect(jsonPath("$.timestamp").isNotEmpty());

    }

}

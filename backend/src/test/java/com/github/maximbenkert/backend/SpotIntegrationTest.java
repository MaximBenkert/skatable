package com.github.maximbenkert.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
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
    @Test
    void getAllSpots_shouldReturnEmptyList_whenRepoIsEmpty() throws Exception {
        mockMvc.perform(get("/api/spots"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """
                ));
    }
}

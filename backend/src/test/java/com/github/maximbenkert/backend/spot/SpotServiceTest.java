package com.github.maximbenkert.backend.spot;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

class SpotServiceTest {
    SpotRepository spotRepository = mock(SpotRepository.class);
    SpotService spotService = new SpotService(spotRepository);

    final String testIdOne = "123";
    final Coordinates testCoordinates = new Coordinates(52.3333, 25.3333);
    final String testName = "Treppen";

    private Spot testSpotInstance() {
        return new Spot(testIdOne, testCoordinates, testName);
    }

    private SpotDTO testSpotDTOInstance() {
        return new SpotDTO(testCoordinates, testName);
    }

    @BeforeEach
    void init() {
        this.spotService = new SpotService(spotRepository);
    }

    @Test
    void getAllSpots_shouldReturnEmptyList_whenRepoIsEmpty() {
        //GIVEN
        Mockito.when(spotRepository.findAll())
                .thenReturn(new ArrayList<>());
        //WHEN
        List<Spot> actual = spotService.getAllSpots();
        //THEN
        verify(spotRepository).findAll();
        assertEquals(new ArrayList<>(), actual);
    }


    @Test
    void getAllSpots_shouldReturn_listOfAllSpots() {
        //GIVEN
        Spot testSpot = testSpotInstance();
        Mockito.when(spotRepository.findAll())
                .thenReturn(new ArrayList<>(List.of(testSpot)));
        //WHEN
        List<Spot> actual = spotService.getAllSpots();
        //THEN
        verify(spotRepository).findAll();
        List<Spot> expected = new ArrayList<>(List.of(testSpot));
        assertEquals(expected, actual);
    }

    @Test
    void addSpot_ShouldReturnAddedSpot() {
        //GIVEN
        SpotDTO testSpotDTO = testSpotDTOInstance();
        Spot withoutId = new Spot(null, testSpotDTO.coordinates(), testSpotDTO.name());
        Spot testSpot = testSpotInstance();
        Mockito.when(spotRepository.save(withoutId))
                .thenReturn(testSpot);
        //WHEN
        Spot actual = spotService.addSpot(testSpotDTO);
        Spot expected = testSpotInstance();
        //THEN
        verify(spotRepository).save(withoutId);
        assertEquals(expected, actual);
    }
}
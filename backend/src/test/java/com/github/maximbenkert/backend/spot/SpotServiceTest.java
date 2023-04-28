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

    private final String testIdOne = "123";
    private final Coordinates testCoordinates = new Coordinates(52.3333, 25.3333);
    private final String testName = "Treppen";
    private Spot testSpotInstance() {
        return new Spot(testIdOne, testCoordinates, testName);
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
}
package com.github.maximbenkert.backend.spot;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

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
        return new SpotDTO(testIdOne, testCoordinates, testName);
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

    @Test
    void getSpotById_shouldReturnRequestedSpot() {
        Spot requested = testSpotInstance();

        Mockito.when(spotRepository.findById(requested.id()))
                .thenReturn(Optional.of(requested));

        Spot actual = spotService.getSpotById(requested.id());

        verify(spotRepository).findById(requested.id());
        assertEquals(requested, actual);
    }

    @Test
    void getSpotById_shouldThrowException_whenInvalidId() {
        String errorMessage = "Spot with ID ' " + testIdOne + " ' not found!";

        Mockito.when(spotRepository.findById(testIdOne))
                .thenThrow(new NoSuchElementException(errorMessage));

        Exception exception = assertThrows(NoSuchElementException.class,
                () -> spotService.getSpotById(testIdOne));

        verify(spotRepository).findById(testIdOne);
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    void deleteSpotById_ShouldDeleteSpot() {
        Mockito.when(spotRepository.existsById(testIdOne))
                .thenReturn(true);

        spotService.deleteSpotById((testIdOne));

        verify(spotRepository).existsById(testIdOne);
    }

    @Test
    void deleteSpotById_shouldThrowException_whenInvalidId() {
        Mockito.when(spotRepository.existsById(testIdOne))
                .thenReturn(false);

        Exception exception = assertThrows(NoSuchElementException.class,
                () -> spotService.deleteSpotById(testIdOne));

        verify(spotRepository).existsById(testIdOne);

        String actual = exception.getMessage();
        String expected = "Couldn't delete spot. Id " + testIdOne + " doesn't exist";
        assertEquals(expected, actual);
    }

    @Test
    void updateSpot_shouldUpdateSpot() {
        //GIVEN
        SpotDTO spotDTOToUpdate = testSpotDTOInstance();
        Spot toUpdate = new Spot(spotDTOToUpdate.id(), spotDTOToUpdate.coordinates(), spotDTOToUpdate.name());
        Spot spot = testSpotInstance();

        Mockito.when(spotRepository.existsById(toUpdate.id()))
                .thenReturn(true);
        Mockito.when(spotRepository.save(toUpdate))
                .thenReturn(spot);
        //WHEN
        Spot actual = spotService.updateSpot(spotDTOToUpdate);
        Spot expected = testSpotInstance();
        //THEN
        verify(spotRepository).save(toUpdate);
        assertEquals(expected, actual);
    }
}
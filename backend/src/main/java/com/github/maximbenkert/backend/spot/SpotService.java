package com.github.maximbenkert.backend.spot;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class SpotService {
    private final SpotRepository spotRepository;

    List<Spot> getAllSpots() {
        return spotRepository.findAll();
    }

    public Spot addSpot(SpotDTO spotDTO) {
       Spot spotToAdd = new Spot(null, spotDTO.coordinates(), spotDTO.name());
        return spotRepository.save(spotToAdd);
    }

    public Spot getSpotById(String id) {
        String errorMessage = "Spot with ID '" + id + "' not found!";
        return spotRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException(errorMessage));

    }

    public void deleteSpotById(String id) {
        if (spotRepository.existsById(id)) {
            spotRepository.deleteById(id);
        }
        else throw new NoSuchElementException("Couldn't delete spot. Id " + id + " doesn't exist");
    }
}

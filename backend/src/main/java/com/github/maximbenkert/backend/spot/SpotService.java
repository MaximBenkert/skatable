package com.github.maximbenkert.backend.spot;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
}

package com.github.maximbenkert.backend.spot;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SpotService {
    private final SpotRepository spotRepository;

    List<Spot> getAllSpots() {
        return spotRepository.findAll();
    }

    public Spot addSpot(Spot spot) {
        String id = UUID.randomUUID().toString();

        Spot spotToAdd = spot.withId(id);
        return spotRepository.save(spotToAdd);
    }
}

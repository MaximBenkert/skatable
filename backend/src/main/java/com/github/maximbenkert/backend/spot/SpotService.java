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

}

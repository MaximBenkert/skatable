package com.github.maximbenkert.backend.spot;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/spots")
@RequiredArgsConstructor
public class SpotController {
    private final SpotService spotService;

    @GetMapping
    List<Spot> getAllSpots(){
        return spotService.getAllSpots();
    }

    @PostMapping
    Spot addSpot(@RequestBody @Valid SpotDTO spotDTO) {
        return spotService.addSpot(spotDTO);
    }
    @GetMapping("/{id}")
    Spot getSpotById(@PathVariable String id) {
        return spotService.getSpotById(id);
    }
    @DeleteMapping("/{id}")
    void deleteSpotById(@PathVariable String id) {
        spotService.deleteSpotById(id);
    }

    @PutMapping("/{id}")
    Spot updateSpot (@PathVariable String id, @RequestBody SpotDTO spotDTO) {
        if (!spotDTO.id().equals(id)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The id in the url does not match the request body's id");
        }
        return spotService.updateSpot(spotDTO);
    }



}

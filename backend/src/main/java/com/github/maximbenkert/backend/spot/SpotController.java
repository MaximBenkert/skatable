package com.github.maximbenkert.backend.spot;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    /*@PostMapping
    Spot postSpot(@RequestBody @Valid Spot spot) {
        return spotService.addSpot(spot);
    }*/

    @PostMapping
    Spot addSpot(@RequestBody SpotDTO spotDTO) {
        return spotService.addSpot(spotDTO);
    }




}

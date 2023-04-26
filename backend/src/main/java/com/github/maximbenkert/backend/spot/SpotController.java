package com.github.maximbenkert.backend.spot;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/spot")
@RequiredArgsConstructor
public class SpotController {
    private final SpotService spotService;

    @GetMapping
    List<Spot> getAllSpots(){
        return spotService.getAllSpots();
    }


}

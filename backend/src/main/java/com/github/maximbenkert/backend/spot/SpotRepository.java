package com.github.maximbenkert.backend.spot;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpotRepository extends MongoRepository<Spot, String> {


}

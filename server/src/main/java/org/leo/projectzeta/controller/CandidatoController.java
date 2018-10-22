package org.leo.projectzeta.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/secured/company")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class CandidatoController {

}
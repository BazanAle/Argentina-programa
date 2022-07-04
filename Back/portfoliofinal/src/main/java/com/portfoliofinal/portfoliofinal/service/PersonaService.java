/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Persona;
import com.portfoliofinal.portfoliofinal.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandrobazan
 */
@Service
public class PersonaService implements IPersonaService {

    @Autowired
    public PersonaRepository persoRepo;
    
    @Override
    public List<Persona> obtenerPersona() {
       return persoRepo.findAll();
    }

    @Override
    public Persona crearPersona(Persona persona) {
      return persoRepo.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
      persoRepo.deleteById(id);
    }

    @Override
    public Persona buscarPersona(Long id) {
       return persoRepo.findById(id).orElse(null);
    }

    @Override
    public void modificarPersona(Persona persona) {
       persoRepo.save(persona);
    }
    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Experiencia;
import com.portfoliofinal.portfoliofinal.repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandrobazan
 */
@Service
public class ExperienciaService implements IExperienciaService{
 @Autowired
 public ExperienciaRepository experienciaRepo;
 
    @Override
    public List<Experiencia> obtenerExperiencia() {
     return experienciaRepo.findAll();
    }

    @Override
    public Experiencia crearExperiencia(Experiencia experiencia) {
        return experienciaRepo.save(experiencia);
    }

    @Override
    public void borrarExperiencia(Long id) {
       experienciaRepo.deleteById(id);
    }

    @Override
    public Experiencia buscarExperiencia(Long id) {
      return experienciaRepo.findById(id).orElse(null);
    }

    @Override
    public void modificarExperiencia(Experiencia experiencia) {
      experienciaRepo.save(experiencia);
    }
    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.miportfolio.Springboot.service;

import com.miportfolio.Springboot.model.Educacion;
import com.miportfolio.Springboot.repository.EducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandrobazan
 */
@Service
public class EducacionService implements IEducacionService {

    @Autowired
    public EducacionRepository educRepository;
    
  
    @Override
    public List<Educacion> obtenerEducacion() {
        return educRepository.findAll();
    }

    @Override
    public void crearEducacion(Educacion educacion) {
        educRepository.save(educacion);
    }

    @Override
    public void borrarEducacion(Long id) {
        educRepository.deleteById(id);
    }

    @Override
    public Educacion buscarEducacion(Long id) {
        return educRepository.findById(id).orElse(null);
    }

    @Override
    public void modificarEducacion(Educacion educacion) {
       educRepository.save(educacion);
    }
    
    
    
}

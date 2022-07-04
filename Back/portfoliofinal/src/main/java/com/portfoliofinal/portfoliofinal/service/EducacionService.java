/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Educacion;
import com.portfoliofinal.portfoliofinal.repository.EducacionRepository;
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
    public Educacion crearEducacion(Educacion educacion) {
        return educRepository.save(educacion);
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

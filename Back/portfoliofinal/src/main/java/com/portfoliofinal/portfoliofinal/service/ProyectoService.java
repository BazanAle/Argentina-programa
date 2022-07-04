/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Proyecto;
import com.portfoliofinal.portfoliofinal.repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandrobazan
 */
@Service
public class ProyectoService implements IProyectoService{
    @Autowired
    private ProyectoRepository proyectoRepo;
    @Override
    public List<Proyecto> obtenerProyecto() {
       return proyectoRepo.findAll();
    }

    @Override
    public Proyecto crearProyecto(Proyecto proyecto) {
      return proyectoRepo.save(proyecto);
    }

    @Override
    public void borrarProyecto(Long id) {
        proyectoRepo.deleteById(id);
    }

    @Override
    public Proyecto buscarProyecto(Long id) {
      return proyectoRepo.findById(id).orElse(null);
    }

    @Override
    public void modificarProyecto(Proyecto proyecto) {
        proyectoRepo.save(proyecto);
    }
    
}

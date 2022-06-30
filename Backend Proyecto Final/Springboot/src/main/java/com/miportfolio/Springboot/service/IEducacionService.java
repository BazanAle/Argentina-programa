/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.miportfolio.Springboot.service;

import com.miportfolio.Springboot.model.Educacion;
import java.util.List;

/**
 *
 * @author alejandrobazan
 */
public interface IEducacionService {
    public List<Educacion> obtenerEducacion();
    public void crearEducacion(Educacion educacion);
    public void borrarEducacion(Long id);
    public Educacion buscarEducacion(Long id);
    public void modificarEducacion(Educacion educacion);
}

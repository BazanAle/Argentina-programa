/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.service;

import com.portfoliofinal.portfoliofinal.model.Proyecto;
import java.util.List;

/**
 *
 * @author alejandrobazan
 */
public interface IProyectoService {
    public List<Proyecto> obtenerProyecto();
    public Proyecto crearProyecto(Proyecto proyecto);
    public void borrarProyecto(Long id);
    public Proyecto buscarProyecto(Long id);
    public void modificarProyecto(Proyecto proyecto);
}

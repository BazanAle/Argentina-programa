/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.repository;

import com.portfoliofinal.portfoliofinal.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author alejandrobazan
 */
@Repository
public interface ProyectoRepository extends JpaRepository<Proyecto ,Long > {
    
}

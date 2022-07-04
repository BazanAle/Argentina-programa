/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliofinal.portfoliofinal.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author alejandrobazan
 */

@Getter
@Setter

@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Basic
    private String nombre;
    private String apellido;
    private String domicilio;
    private String fecha_nac;
    private String telefono;
    private String email;
    private String sobre_mi;
    private String url_foto;

    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String domicilio, String fecha_nac, String telefono, String email, String sobre_mi, String url_foto) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.domicilio = domicilio;
        this.fecha_nac = fecha_nac;
        this.telefono = telefono;
        this.email = email;
        this.sobre_mi = sobre_mi;
        this.url_foto = url_foto;
    }

    @Override
    public String toString() {
        return "Persona{" + "id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", domicilio=" + domicilio + ", fecha_nac=" + fecha_nac + ", telefono=" + telefono + ", email=" + email + ", sobre_mi=" + sobre_mi + ", url_foto=" + url_foto + '}';
    }
    
    
    
    
}

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
public class Experiencia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Basic
    private String nombre_empresa;  
    private String fecha_inicio;
    private String fecha_fin;
    private String descripcion;
    private String puesto;
    private String lugar;
    private String modalidad;
    private String url_logo;

    public Experiencia() {
    }

    public Experiencia(Long id, String nombre_empresa, String fecha_inicio, String fecha_fin, String descripcion, String puesto, String lugar, String modalidad, String url_logo) {
        this.id = id;
        this.nombre_empresa = nombre_empresa;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
        this.puesto = puesto;
        this.lugar = lugar;
        this.modalidad = modalidad;
        this.url_logo = url_logo;
    }

    @Override
    public String toString() {
        return "Experiencia{" + "id=" + id + ", nombre_empresa=" + nombre_empresa + ", fecha_inicio=" + fecha_inicio + ", fecha_fin=" + fecha_fin + ", descripcion=" + descripcion + ", puesto=" + puesto + ", lugar=" + lugar + ", modalidad=" + modalidad + ", url_logo=" + url_logo + '}';
    }
    
    
    
}

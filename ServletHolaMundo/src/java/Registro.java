/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author acer
 */
public class Registro extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request peticiones del cliente
     * @param response servlet response respuestas del servidor
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            //manipular datos del formulario (variables)
           String nom, appat, apmat, correo, ip, iph;
           int edad , puerto, puertoh;
           
           ip = request.getLocalAddr();
           puerto  =  request.getLocalPort();
           iph = request.getRemoteAddr();
           puertoh = request.getRemotePort();
           
           nom = request.getParameter("nombre");
           appat = request.getParameter("appat");
           apmat = request.getParameter("apmat");
           correo = request.getParameter("email");
           edad = Integer.parseInt(request.getParameter("edad"));
           
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de usuarios</title>");            
            out.println("</head>");
            out.println("<body>"
                                            + "<br> Tu nombre es: " + nom );
            out.println("<br>"
                    + "Tu Apellido Paterno es: " +appat
                    + "<br>"
                    + "Tu Apellido Materno es: " +apmat
                    + "<br>"
                    + "Tu Edad es: "+edad
                     + "<br>" 
                    + "Tu Correo es: " +correo
                    + "<br>");
            out.println("<h1>Registro exitoso</h1>"
                    + "<br>"
                    + "La IP Local es : "+ip
                    + "<br>"
                    + "La IP del host es : "+iph
                    + "<br>"
                    + "Puerto Local : "+puerto
                    + "<br>"
                    + "Puerto del host : " +puertoh
                     + "<a href='index.html'>Regresar al formulario</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

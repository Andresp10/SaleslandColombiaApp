package Controlador;

import Modelo.Canal;
import Modelo.Sector;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Query;
import org.hibernate.Session;


public class sector extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String url[] = request.getRequestURI().split("/");
        
        if (url.length >= 3) {
            
            switch (url[3]){
            
                //Usar y crear cada caso para cada una de las acciones que se vayan a realizar
                case "registrar":
                    
                    registrarsector(request, response);
                    
                    break;
                case "versectores":
                    versectores(request, response);
                    break;
                    
                case "cargardatossector":
                    cargardatossector(request, response);
                    break;
                case "editarsector":
                    editarsector(request, response);                    
                    break;
                
            }
            
        }
        
    }
    
    protected void registrarsector(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        try{
            
            System.out.println("EEEEEEEERRRRRRRRRROOOOOOOOOORRRRRRRRRRRRRRRRRRRRRRRR");
            String nombreSector = request.getParameter("NombreSector");
            String descripcionSector = request.getParameter("DescripcionSector");
            
            Session sesion = HibernateUtil.getSessionFactory().openSession();
            Sector objSector = new Sector(nombreSector, descripcionSector, "Activo");
            sesion.beginTransaction();
            sesion.save(objSector);
            sesion.getTransaction().commit();
            sesion.close();
            response.getWriter().write("200");
        
        }catch(Exception e){
        
            System.err.println(e);
            response.getWriter().write("500");
        }
        
        
    }

    protected void versectores(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        try{
        
            int countRows = 1;
            Session sesion = HibernateUtil.getSessionFactory().openSession();
            Query query = sesion.createQuery("FROM Sector");                        
            List<Sector> listaSector = query.list();
            
//            Gson gson = new Gson();
//            String json = gson.toJson(listaSector);
//            response.getWriter().write(json);
//            
            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/plain");
            for(Sector sector : listaSector){
            
                response.getWriter().write("<tr>"
                                              + "<td class='text-center'>"+countRows+"</td>"
                                              + "<td>"+sector.getNombreSector()+"</td>"
                                              + "<td>"+sector.getDescripcionSector()+"</td>"
                                              + "<td class='text-right'>"+sector.getEstado()
                                                      
                                                   /*+ "<div class='row'>"
                                                      + "<div class='col-md-12'>"
                                                        + "<input type='checkbox' checked='' data-toggle='switch' data-on-color='info' data-off-color='info'>"
                                                        + "<span class='toggle'></span>"
                                                      + "</div>"
                                                   + "</div>"*/
                                              + "</td>"
                                              + "<td class='td-actions text-right'>"
                                                + "<a href='#' rel='tooltip' title='' class='btn btn-info btn-link btn-xs' data-original-title='Ver Sector'>"
                                                    + "<i class='fa fa-user'></i>"
                                                + "</a>"   
                                                + "<a href='/SaleslandColombiaApp/ligth-bootstrap/Pages/sector/editarsector.jsp?_"+sector.getIdSector()+"' rel='tooltip' title='' class='btn btn-warning btn-link btn-xs' data-original-title='Editar'>"
                                                    + "<i class='fa fa-edit'></i>"
                                                + "</a>"
                                                + "<a href='#' rel='tooltip' title='' class='btn btn-danger btn-link btn-xs' data-original-title='Eliminar'>"
                                                    + "<i class='fa fa-times'></i>"
                                                + "</a>"
                                              + "</td>"
                                         + "</tr>");
                countRows++;
                
            }
        
        }catch(Exception e){
        
            System.err.println(e);
            response.getWriter().write("500");
        }
    
    }
    protected void cargardatossector(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try{
            
            String idSector = request.getParameter("idSector");
            Session sesion = HibernateUtil.getSessionFactory().openSession();
            Query query = sesion.createQuery("FROM Sector WHERE IdSector = "+idSector+"");
            
            List<Sector> listaSector = query.list();
            Gson gson = new Gson();
            String json = gson.toJson(listaSector);
            response.getWriter().write(json);
            
        
        }catch(Exception e){
            System.err.println(e);
        }    
    }
    protected void editarsector(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    
        try{
            String id = request.getParameter("IdSector");
            
            int idEstado = Integer.parseInt(id);
            System.out.println(idEstado);
            String estado = request.getParameter("EstadoSector");
            String nombre = request.getParameter("NombreSector");
            String descripcion = request.getParameter("DescripcionSector");
            
            Session sesion = HibernateUtil.getSessionFactory().openSession();
            sesion.beginTransaction();
            Query query = sesion.createSQLQuery("UPDATE sector SET Estado='"+estado+"', NombreSector='"+nombre+"', Descripcion='"+descripcion+"' WHERE idSector="+idEstado+"");
            query.executeUpdate();
            sesion.getTransaction().commit();
            sesion.close();
           
            response.getWriter().write("200");
            
        }catch(Exception e){
            response.getWriter().write("500");
            System.err.println(e);
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

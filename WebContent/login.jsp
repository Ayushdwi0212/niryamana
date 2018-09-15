<%@ page import ="java.sql.*,p.*" %>
<%
    try{
        String userName = request.getParameter("userName");   
        String password = request.getParameter("password");
        Connection con=Connect_db.getCon();  
        ResultSet rs=con.createStatement().executeQuery("select * from user_db where email='"+userName+"' and pass='"+password+"'");
        if(rs.next())           
            out.println("Valid login credentials");        
         else
            out.println("Invalid login credentials");            
    }
    catch(Exception e){       
        out.println("Something went wrong !! Please try again");       
    }      
%>
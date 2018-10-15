<%@page import="java.sql.*,p.*" %>

<%
  String firstName= (String)session.getAttribute("firstName");
  String lastName= (String)session.getAttribute("lastName");
  String middleName= (String)session.getAttribute("middleName");
  String zipCode= (String)session.getAttribute("zipCode");

  String email= request.getParameter("email");
  String password= request.getParameter("password");

  try{
    Connection con= Connect_db.getCon();
    PreparedStatement pst= con.prepareStatement("insert into user_db values(?,?,?,?,?,?)");
    pst.setString(1,firstName);
    pst.setString(2,lastName);
    pst.setString(3,middleName);
    pst.setString(4,zipCode);
    pst.setString(5,email);
    pst.setString(6,password);

    pst.execute();
    response.sendRedirect("reglogin.html?msg=successfully register");
    con.close();    
  }

  catch(Exception e){
    out.println(e);   
  }
%>
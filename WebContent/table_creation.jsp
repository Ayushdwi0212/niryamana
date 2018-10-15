<%@page import="p.*,java.sql.*"%>

<html>
	<body>
		<%
			try{
				Connection con= Connect_db.getCon();
				Statement pst= con.createStatement();
				pst.execute("create table user_db(f_name varchar(30), l_name varchar(30), m_name varchar2(30), z_code number(6), email varchar(50) primary key, pass varchar(30))");

				System.out.println("Table created successfully.");
				con.close();
			}
			
			catch(Exception e){
				System.out.println("db related problem or tables already exist");
			}
		%>
	</body>
</html>
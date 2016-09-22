package mvcCalculoAprovacao;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(value = "/result")
public class controller extends HttpServlet {
  @Override
  protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
  
    String nome = req.getParameter("nome");
    String frequenciaStr = req.getParameter("frequencia");
    Float frequencia = frequenciaStr == null || frequenciaStr.isEmpty() ? 0 : Float.parseFloat(frequenciaStr);
    String notafinalStr = req.getParameter("notaFinal");
    Float notafinal = notafinalStr == null || notafinalStr.isEmpty() ? 0 : Float.parseFloat(notafinalStr);
    String resultado;
    if(nome != null && notafinal != null && frequencia !=  null && notafinal != 0 && frequencia != 0){
      resultado = model.resultado(frequencia, notafinal);
      req.setAttribute("resultado", resultado);
      req.setAttribute("nome", nome);
    }
    else {
      resultado="Por favor, passse os dados correto!";
      req.setAttribute("resultado", resultado);
    }
    String nextJsp = "/index.jsp";
    RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(nextJsp);
    dispatcher.forward(req, resp);
  }
}
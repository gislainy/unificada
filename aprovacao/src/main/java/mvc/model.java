package mvcCalculoAprovacao;

public class model {
    public static String resultado(float frequencia, float notafinal){
        String result = "";
        boolean aprovadoPorNota = false;
        boolean aprovadoPorFrequencia = false;
        if(notafinal >= 6.0)
            aprovadoPorNota = true;
        if(frequencia >= 75.00)
            aprovadoPorFrequencia = true;
        if(aprovadoPorNota && aprovadoPorFrequencia)
            result = "aprovado(a)";
        else if(aprovadoPorNota)
            result = "reprovado(a) por frequência";
        else if(aprovadoPorFrequencia)
            result = "reprovado(a) por nota";
        else 
            result = "reprovado(a) por nota e frequência";
        return result;
    }
}
using System;

namespace API_Copa.Models
{
    public class Jogo
    {
        public Jogo()
        {
            SelecaoA = new Selecao();
            SelecaoB = new Selecao();
            placarSelecaoA = 0; 
            placarSelecaoB = 0; 
            CriadoEm = DateTime.Now;
        }
        public int Id { get; set; }

        public int SelecaoAId {get; set; }
        public Selecao SelecaoA { get; set; }
        public int SelecaoBId {get; set; }
        public Selecao SelecaoB { get; set; }

        public int placarSelecaoA {get; set; }
        public int placarSelecaoB {get; set; }

        public DateTime CriadoEm { get; set; }
    }
}

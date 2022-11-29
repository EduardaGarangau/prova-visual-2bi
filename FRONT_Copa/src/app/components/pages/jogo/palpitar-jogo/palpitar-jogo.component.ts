import { Component, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute, Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';
import { Jogo } from "src/app/models/jogo.model";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  id!: number; 
  selecaoA!: Selecao; 
  selecaoB!: Selecao;
  selecaoAId!: number;
  selecaoBId!: number;  
  placarSelecaoA!: number; 
  placarSelecaoB!: number; 

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { id } = params;
      if (id !== undefined) {
        this.http.get<Jogo>(`https://localhost:5001/api/jogo/buscar/${id}`).subscribe({
          next: (jogo) => {
            this.id = jogo.id!; 
            this.selecaoA = jogo.selecaoA!;
            this.selecaoB = jogo.selecaoB!;
            this.placarSelecaoA = jogo.placarSelecaoA!; 
            this.placarSelecaoB = jogo.placarSelecaoB!; 
            this.selecaoAId = jogo.selecaoAId!; 
            this.selecaoBId = jogo.selecaoBId!; 
          },
        });
      }
    });
  }

  palpitar(): void {
    let jogo: Jogo = { 
      id: this.id, 
      selecaoAId: this.selecaoAId, 
      selecaoBId: this.selecaoBId, 
      placarSelecaoA: this.placarSelecaoA, 
      placarSelecaoB: this.placarSelecaoB, 
    }; 

    this.http.patch<Jogo>("https://localhost:5001/api/jogo/palpitar", jogo)
    .subscribe({
      next: (jogo) =>{
        console.log("Jogo adicionado com sucesso");
      },
    });
    console.log(jogo);
    
  }
  }


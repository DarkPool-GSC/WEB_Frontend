import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { Firestore } from '@angular/fire/firestore';
import { Medicines } from '../../models/perscription';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { setDoc, getDoc, updateDoc, deleteDoc, doc, collection, getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PerscriptionService {

  constructor(
    private firestore: Firestore,
    private router: Router,
    private ngzone: NgZone,
  ) { }
}

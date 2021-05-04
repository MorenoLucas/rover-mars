import { Injectable } from '@angular/core';
import { Commands, Coordinates } from '../interface/commands';
import { Square } from '../interface/square';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  // Comprobamos que la posicion este dentro del cuadrado y sea mayor a 0
  checkRoverPosition(width: Square, height: Square, x: Commands, y: Commands) {
    if (
      width.width >= x.coordinates.xWidth &&
      height.height >= y.coordinates.yHeight &&
      x.coordinates.xWidth >= 0 &&
      y.coordinates.yHeight >= 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  //Controlamos el giro del Rover

  changeOrientation(
    userInput: 'L' | 'R' | 'A',
    orientation: 'N' | 'S' | 'E' | 'W'
  ) {
    const actualDirection = userInput;
    let roverOrientation = orientation;
    switch (actualDirection) {
      case 'L':
        switch (roverOrientation) {
          case 'N':
            roverOrientation = 'W';
            break;
          case 'E':
            roverOrientation = 'N';
            break;
          case 'S':
            roverOrientation = 'E';
            break;
          case 'W':
            roverOrientation = 'S';
            break;
        }
        return roverOrientation;

      case 'R':
        switch (roverOrientation) {
          case 'N':
            roverOrientation = 'E';
            break;
          case 'E':
            roverOrientation = 'S';
            break;
          case 'S':
            roverOrientation = 'W';
            break;
          case 'W':
            roverOrientation = 'N';
            break;
        }
        return roverOrientation;

      case 'A':
        return roverOrientation;
    }
  }
  // changeOrientation(
  //   direction: 'L' | 'R' | 'A',
  //   orientation: 'N' | 'S' | 'E' | 'W'
  // ): string {
  //   // we assume the rover can only change orientation when he receives either Left (L) or Right (R) Direction

  //   // const arrayOrientations = ['N', 'E', 'S', 'W']
  //   if (direction === 'L' || direction === 'R') {
  //     switch (orientation) {
  //       case 'N': {
  //         if (direction === 'L') {
  //           return 'W';
  //         } else {
  //           // can only be 'R'
  //           return 'E';
  //         }
  //       }
  //       case 'S': {
  //         if (direction === 'L') {
  //           return 'E';
  //         } else {
  //           // can only be 'R'
  //           return 'W';
  //         }
  //       }
  //       case 'E': {
  //         if (direction === 'L') {
  //           return 'N';
  //         } else {
  //           // can only be 'R'
  //           return 'S';
  //         }
  //       }
  //       case 'W': {
  //         if (direction === 'L') {
  //           return 'S';
  //         } else {
  //           // can only be 'R'
  //           return 'N';
  //         }
  //       }
  //     }
  //   } else {
  //     return orientation;
  //   }
  // }

  getNewCoordinateWhereiWantToGo(
    cordenadasInicialesX,
    cordenadasInicialesY,
    _orientacion: 'N' | 'S' | 'W' | 'E'
  ) {
    let xFinal = cordenadasInicialesX;
    let yFinal = cordenadasInicialesY;

    let cordenadasFinales: Coordinates;
    switch (_orientacion) {
      case 'N':
        yFinal += cordenadasInicialesY;
        break;
      case 'S':
        yFinal -= cordenadasInicialesY;
        break;
      case 'W':
        xFinal -= cordenadasInicialesX;
        break;
      case 'E':
        xFinal += cordenadasInicialesX;
        break;
    }
    cordenadasFinales.xWidth = xFinal;
    cordenadasFinales.yHeight = yFinal;

    return cordenadasFinales;
  }
}

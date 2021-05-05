import { Injectable } from '@angular/core';
import { Commands, Coordinates } from '../interface/commands';
import { Square } from '../interface/square';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  // comprueba que este dentro del cuadrado y sea mayor de 0
  checkIfInsideSquare(square: Square, coordinates: Coordinates): boolean {
    const maxWidth = square.width;
    const maxHeight = square.height;

    return (
      coordinates.xWidth <= maxWidth &&
      coordinates.yHeight <= maxHeight &&
      coordinates.xWidth >= 0 &&
      coordinates.yHeight >= 0
    );
  }

  //// las cordenadas nuevas del rover, devuelve las cordenadas de destino

  getNewCoordinateWhereIWantToGo(
    actualCoordinate: Coordinates,
    orientation: 'N' | 'S' | 'W' | 'E'
  ): Coordinates {
    switch (orientation) {
      case 'N': {
        return {
          xWidth: actualCoordinate.xWidth,
          yHeight: actualCoordinate.yHeight + 1,
        };
      }

      case 'E': {
        return {
          xWidth: actualCoordinate.xWidth + 1,
          yHeight: actualCoordinate.yHeight,
        };
      }
      case 'S': {
        return {
          xWidth: actualCoordinate.xWidth,
          yHeight: actualCoordinate.yHeight - 1,
        };
      }
      case 'W': {
        return {
          xWidth: actualCoordinate.xWidth - 1,
          yHeight: actualCoordinate.yHeight,
        };
      }
    }
  }

  // orientacion de vehiculo
  changeOrientation(direction: string, orientation: string): string {
    if (direction === 'L' || direction === 'R') {
      switch (orientation) {
        case 'N': {
          if (direction === 'L') {
            return 'W';
          } else {
            return 'E';
          }
        }
        case 'S': {
          if (direction === 'L') {
            return 'E';
          } else {
            return 'W';
          }
        }
        case 'E': {
          if (direction === 'L') {
            return 'N';
          } else {
            return 'S';
          }
        }
        case 'W': {
          if (direction === 'L') {
            return 'S';
          } else {
            return 'N';
          }
        }
      }
    } else {
      return orientation;
    }
  }

  // juntamos los metodos, plantedo si se mueve de lado y avanza
  moveRover(
    rover: Commands,
    direction: 'L' | 'R' | 'A',
    square: Square
  ): Commands {
    if (direction === 'L' || direction === 'R') {
      rover.orientation = this.changeOrientation(
        direction,
        rover.orientation
      ) as 'N' | 'S' | 'W' | 'E';
      console.log('rover', rover);

      return rover;
    } else {
      const targetCoordinates = this.getNewCoordinateWhereIWantToGo(
        rover.coordinates,
        rover.orientation
      );

      if (this.checkIfInsideSquare(square, targetCoordinates)) {
        rover['coordinates'] = targetCoordinates;

        console.log('ROVER', rover);
        rover.successTrip = true;
        return rover;
      } else {
        rover.successTrip = false;
        return rover;
      }
    }
  }
  // ejercicio
  trip(ordenes, rover: Commands, square: Square) {
    ordenes.forEach((mov) => {
      this.moveRover(rover, mov, square);
    });
    if (rover.successTrip) {
      console.log(
        `Resultado Final ${rover.successTrip} ${rover.orientation} (${rover.coordinates.xWidth},${rover.coordinates.yHeight})`
      );
    } else {
      console.log(
        `Resultado Final ${rover.successTrip} ${rover.orientation} (${rover.coordinates.xWidth},${rover.coordinates.yHeight})`
      );
    }
  }
}

/* global Phaser */

// Copyright (c) 2021 Daniel Pawelko All rights reserved
// 
// Created by: Daniel Pawelko
// Created on: April 2021
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Title Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene
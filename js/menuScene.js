/* global Phaser */

// Copyright (c) 2021 Daniel Pawelko All rights reserved
// 
// Created by: Daniel Pawelko
// Created on: April 2021
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default MenuScene
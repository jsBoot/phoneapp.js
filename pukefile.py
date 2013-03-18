#!/usr/bin/env puke
# -*- coding: utf8 -*-

global PH
import helpers as PH

@task("default")
def default():
  libs = FileList('src', filter="*namespace.js", exclude="*shims*")
  libs.merge(FileList('src', filter="*.js", exclude="*namespace.js,*shims*"))
  combine(libs, 'build/phoneapp.js')

  shims = FileList('src', filter="*shims*")
  combine(shims, 'build/phoneapp.shims.js')

  FileSystem.copyfile('build/phoneapp.js', '/Workspace/webitup/clients/soldis/app.js/build/js/phoneapp.js')

@task("Lint")
def lint():
  PH.linter("src")

@task("Hint")
def hint():
  PH.hinter("src")

@task("Flint")
def flint():
  PH.flinter("src")


@task("Minting")
def mint():
  PH.minter('build')

@task("Stats report deploy")
def stats():
  PH.stater('build')
#!/usr/bin/env puke
# -*- coding: utf8 -*-

global help
from helpers import Helpers as help
import re
import json

@task("Default task")
def default():
  executeTask("build")
  executeTask("deploy")

@task("All")
def all():
  # Cache.clean()
  executeTask("lint")
  executeTask("hint")
  executeTask("build")
  executeTask("mint")
  executeTask("deploy")
  executeTask("stats")


@task("Wash the taupe!")
def clean():
  Cache.clean()
  help.cleaner()

@task("Lint")
def lint():
  help.linter("src")

@task("Hint")
def hint():
  help.hinter("src")

@task("Flint")
def flint():
  help.flinter("src")

@task("Minting")
def mint():
  help.minter(Yak.paths['build'], strict = True)
  # Some dirty code might not pass strict
  # help.minter(Yak.paths['build'], strict = False)

@task("Stats report deploy")
def stats():
  help.stater(Yak.paths['build'])


@task("Build package")
def build():
  # ============================
  # Very basic build
  # ============================

  sed = Sed()
  help.replacer(sed)
  # deepcopy(FileList("src", exclude = "*tests*"), Yak.paths['build'], replace = sed)

  libs = FileList('src', filter="*namespace.js", exclude="*shims*")
  libs.merge(FileList('src', filter="*.js", exclude="*namespace.js,*shims*"))
  combine(libs, Yak.paths['build'] + '/phoneapp.js')

  # shims = FileList('src', filter="*shims*")
  # combine(shims, Yak.paths['build'] + '/phoneapp.shims.js')

  combine(FileList(Yak.paths['build'], filter='*phoneapp.js'), '/Workspace/webitup/omci/mobile-app/build/js/phoneapp/master/phoneapp.js')

@task("Deploy package")
def deploy():
  # Libraries usually have a versioned path (True)
  # help.deployer(True)
  # Sites or apps dont
  help.deployer(Yak.paths['build'], True)
  # In case you wanna deploy dependencies as well
  # help.deployer('dependencies', False, 'dependencies')

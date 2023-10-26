let 
  pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/06278c77b5d162e62df170fec307e83f1812d94b.tar.gz") {};
in
  with pkgs;
  mkShell {
    name = "vue-playground";

    packages = [
      nodejs
      git
    ];

    shellHook = "echo Welcome to vue-playground!";
  }

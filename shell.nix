let pkgs = import <nixpkgs> {};
in
  pkgs.mkShell {
    packages = [
      pkgs.nodejs
      pkgs.git
    ];
  }

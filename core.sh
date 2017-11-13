#!/bin/bash

excla() {
	local mesg=$1; shift
	printf "${BOLD}[ ${BLUE}!${ALL_OFF}${BOLD} ]${ALL_OFF} ${mesg}\n" "$@" >&2
}

msg() {
	local mesg=$1; shift
	printf "${BOLD}[ ${GREEN}I${ALL_OFF}${BOLD} ]${ALL_OFF} ${mesg}\n" "$@" >&2
}

unset ALL_OFF BOLD BLUE GREEN RED YELLOW
ALL_OFF="\e[1;0m"
BOLD="\e[1;1m"
BLUE="${BOLD}\e[1;34m"
GREEN="${BOLD}\e[1;32m"
RED="${BOLD}\e[1;31m"
YELLOW="${BOLD}\e[1;33m"
readonly ALL_OFF BOLD BLUE GREEN RED YELLOW

help() {
    excla "use: ./dock.sh number"
	msg "1 Add a Stack with Recent Applications"
    msg "2 Add a Space"
    msg "3 Scroll Gestures on"
    msg "4 Scroll Gestures off"
    msg "5 Reset Dock"
}

if [ $# = '1' ]; then
	for i in $@; do
	  case $i in

	       "1")
			defaults write com.apple.dock persistent-others -array-add '{ "tile-data" = { "list-type" = 1; }; "tile-type" = "recents-tile"; }' && \
killall Dock
	       ;;
     
	       "2")
	        defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}' && \
killall Dock
	       ;;
       
	       "3")
	        defaults write com.apple.dock scroll-to-open -bool true && \
killall Dock
	       ;;
    
	       "4")
	        defaults write com.apple.dock scroll-to-open -bool false && \
killall Dock
	       ;;
    
	       "5")
	        defaults delete com.apple.dock && \
killall Dock
	       ;;


	       *)     
	       break;;
		 
		 
	  esac
	done
else
	help
	exit 1
fi
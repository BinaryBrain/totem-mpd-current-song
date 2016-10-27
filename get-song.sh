#!/bin/bash
old=""
while true
do
	new="`mpc -h mpd.fixme.ch | head -n 1`"
	if [ "$old" != "$new" ] ; then
		echo -n "$new"
	fi
	old="$new"
	sleep 2
done

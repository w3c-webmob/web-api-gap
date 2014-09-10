#!/bin/bash
HTML5_GROUP=../groupings/native-platforms
set +o histexpand
IFS="
"
echo -n "| "
printf '%-25s' "Feature"
echo -n "|"
for platform in `cat $HTML5_GROUP`; do
    echo -n " "
    printf '%-11s' $platform
    echo -n " |"
done
echo
echo -n "| --- | "
for platform in `cat $HTML5_GROUP`; do
    echo -n " --- | "
done
echo

for f in ../features/*.md ; do
    title=`grep "^#" $f|tr -d "#\n"`
    has_empty_data=`grep "^\* " $f|egrep -v "^\*.*: *\*\*"`
    has_browser_gap=`egrep "^\* browser: \*\*[np].*\*\*" $f`
    if [ -z "$has_empty_data" ]
    then
        if [ -n "$has_browser_gap" ]
        then
        echo -n "|"
        printf '%-25s' "$title"
        echo -n " | "
        for platform in `cat $HTML5_GROUP`; do
            line=`grep "^* $platform:" $f|tr -d "\n"`
            value=`echo "$line"|sed -e "s/.*: *\*\*\([^\*]*\)\*\*.*/\1/"`
            link=`echo "$line"|sed -e '/.*: [^\[]*\[[^]]*\](\([^)]*\)).*/!d;s//\1/'`
            link_title=`echo "$line"|sed -e '/.*: [^\[]*\[\([^]]*\)\](.*/!d;s//\1/'`
            if [ -n "$link" ]
            then
                echo -n "[$value]($link \"$link_title\")"
            else
                echo -n "$value"
            fi
            echo -n "| "
        done
    echo
    fi
    fi
done
#!/bin/bash
HTML5_GROUP=../groupings/html5-platforms

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
    has_empty_data=`grep "^* " $f|egrep -v "^\*.*: *\*\*"`
    if [ -z "$has_empty_data" ]
    then
        echo -n "|"
        printf '%-25s' "$title"
        echo -n " | "
        for platform in `cat $HTML5_GROUP`; do
            printf '%-12s' `grep "^* $platform:" $f|sed -e "s/.*: *\*\*\([^\*]*\)\*\*.*/\1/"|tr -d "\n"`
            echo -n "| "
        done
    echo
    fi
done
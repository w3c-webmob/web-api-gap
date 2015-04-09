all: apis/tr.json

apis/tr.json: $(wildcard data/*.json)
	python tools/extract-spec-data.py $^ > $@
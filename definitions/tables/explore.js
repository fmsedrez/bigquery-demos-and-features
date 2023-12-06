publish("explore", {
    type: "table",
    schema: "tables",
    tags: ["tables"],
    dependencies: ["international_top_terms"],
}).query(ctx => `
    SELECT max(week) as week
    , term
    , REPLACE(region_code, "BR-", "") AS state
    , score 
    FROM ${ctx.ref("international_top_terms")}
    WHERE TRUE
    AND country_code = "BR" 
    AND region_code = 'BR-GO'
    AND week > DATE('2023-10-01')
    AND score < 10
    GROUP BY term, state, score
    ORDER BY score
`)

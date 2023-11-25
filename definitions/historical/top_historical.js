publish("top_historical", {
    type: "incremental",
    schema: "historical",
    description: "Top term for each week",
    tags: ["historical"],
    dependencies: ["top_five_terms"],
    bigquery: {
        partitionBy: "DATETIME_TRUNC(timestamp, DAY)",
    },
    columns: {
        week: "Start of the week",
        term: "Term name",
        state: "State",
        score: "Score",
        timestamp: "Timestamp",
    }
}).query(ctx => `
    SELECT *
    , DATETIME_TRUNC(CURRENT_TIMESTAMP(), DAY) AS timestamp 
    FROM ${ctx.ref("top_five_terms")}
    WHERE TRUE
    AND state = 'GO'
    ORDER BY score
    LIMIT 1
`)

operate("update_partition").queries(ctx =>
    `ALTER TABLE ${ctx.ref('top_historical')} 
    SET OPTIONS (partition_expiration_days = 365)
`)

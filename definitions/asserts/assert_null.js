assert("assert_null")
    .query(ctx =>
        `SELECT * FROM ${ctx.ref('international_top_terms')} 
        WHERE TRUE
        AND country_code = "BR" 
        AND region_code = 'BR-GO'
        AND week > DATE('2023-10-01')
        AND score IS NULL
`)

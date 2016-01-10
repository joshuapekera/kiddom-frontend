Any .coffee files in this directory are collected in alphabetical order.

They're compiled to Javascript, and written to /dist/app/assets/scripts/
as app.js and app.min.js. This is available to the browser at .co/assets/scripts

Include vendor libs using bower. Bower will download the sources to
/app/assets/components. Leave them there, and add a line like the following
to Gruntfile.coffee, which will include them in bundle.js:


    # package bower-installed dependencies
    '<%= paths.dist + paths.scripts %>bundle.js': [
      '<%= paths.components %>jquery/jquery.js'
      # CHECKPOINT: [js] list the modules you want to include into the
      # js application bundle here. This includes third party modules,
      # compiled coffee files and any other js modules you manually
      # included in the project tree
      # NOTE: ordering matters
    ]

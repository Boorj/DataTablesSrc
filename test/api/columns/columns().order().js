// todo tests
// - Confirm it exists and is a function
// - Confirm it returns an API instance
// - Selecting 0, 1, 2 and all columns:
//   - Will trigger ordering on the selected columns
//     - asc
//     - desc
// - Make sure ordering if performed only after draw() is called
describe( "columns- columns().order()", function() {
	dt.libs( {
		js:  [ 'jquery', 'datatables' ],
		css: [ 'datatables' ]
	} );

	describe("Check the defaults", function () {
		dt.html( 'basic' );
		it("Exists and is a function", function () {
			var table = $('#example').DataTable();
			expect(typeof table.columns().order).toBe('function');
		});
		dt.html( 'basic' );
		it("Returns an API instance", function () {
			var table = $('#example').DataTable();
			expect(table.columns().order() instanceof $.fn.dataTable.Api).toBe(true);
		});

		dt.html( 'basic' );
		it("Will trigger ordering on selected column (DESC)", function () {
			var table = $('#example').DataTable();
			table.columns(0).order('desc').draw();
			expect($('#example thead th:eq(0)').attr('class')).toBe('sorting_desc');
		});
		dt.html( 'basic' );
		it("Will trigger ordering on selected column (ASC)", function () {
			var table = $('#example').DataTable();
			table.columns(1).order('asc').draw();
			expect($('#example thead th:eq(1)').attr('class')).toBe('sorting_asc');
		});

		dt.html( 'basic' );
		it("Will trigger ordering on all columns (DESC)", function () {
			var table = $('#example').DataTable();
			table.columns().order('desc').draw();
			expect($('#example thead th:eq(0)').attr('class')).toBe('sorting_desc');
		});
		dt.html( 'basic' );
		it("Will trigger ordering on all columns (ASC)", function () {
			var table = $('#example').DataTable();
			table.columns().order('asc').draw();
			expect($('#example thead th:eq(1)').attr('class')).toBe('sorting_asc');
		});
		dt.html( 'basic' );
		it("Will not trigger if draw() is not called", function () {
			var table = $('#example').DataTable();
			table.columns(0).order('desc');
			expect($('#example thead th:eq(0)').attr('class')).toBe('sorting_asc');
		});
		dt.html( 'basic' );
		it("Will not trigger if draw() is not called (all columns)", function () {
			var table = $('#example').DataTable();
			table.columns().order('desc');
			expect($('#example thead th:eq(0)').attr('class')).toBe('sorting_asc');
		});
	});

});

<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Image::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Image::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Image $image)
    {
        return $image;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Image $image)
    {
        if($image->update($request->all()))
            return response()->json(['success' => true]);
        else
            return response()->json(['success' => false]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $image)
    {
        if($image->delete())
            return response()->json(['success' => true]);
        else
            return response()->json(['success' => false]);
    }
}
